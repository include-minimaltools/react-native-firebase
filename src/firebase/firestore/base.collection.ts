import {
  addDoc,
  collection,
  CollectionReference,
  DocumentData,
  Firestore,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { firestore } from "../core/config";

abstract class BaseCollection<T extends ICollection> {
  protected store: Firestore = firestore;
  public path: string | "";
  protected collection: CollectionReference<DocumentData>;

  constructor(path: string) {
    this.path = path;
    this.collection = collection(firestore, path);
  }

  async getAll(): Promise<T[]> {
    const snapshot = await getDocs(this.collection);
    const list = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return list as T[];
  }

  async create(data: T): Promise<T> {
    const { id } = await addDoc(this.collection, data);
    return {
      ...data,
      id,
    };
  }

  async delete({ id }: Partial<T>): Promise<boolean> {
    const reference = doc(this.collection, id);
    await deleteDoc(reference);
    return !(await this.exists({ id } as Partial<T>));
  }

  async update({ id, ...data }: T): Promise<void> {
    const reference = doc(this.collection, id);
    return await updateDoc(reference, data);
  }

  async exists({ id }: Partial<T>): Promise<boolean> {
    const reference = doc(this.collection, id);
    const snapshot = await getDoc(reference);

    return snapshot.data() !== undefined;
  }

  async get({ id }: Partial<T>): Promise<T> {
    const reference = doc(this.collection, id);
    const snapshot = await getDoc(reference);

    if (snapshot.data() === undefined) {
      throw new Error("Document not found");
    }

    return {
      ...snapshot.data(),
      id: snapshot.id,
    } as T;
  }
}

export { BaseCollection as BaseService };
