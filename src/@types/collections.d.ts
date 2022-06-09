interface ICollection {
  id?: string
}

interface IGame extends ICollection {
  name: string;
  price: number;
  imageUrl: string;
}
