import { IProduct } from "../interfaces";
import { textSlicer } from "../utils/functions";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { title, description, imageURL, price, category } = product;
  return (
    <div className="max-w-sm md:max-w-lg mx-auto border rounded-md p-2 flex flex-col md:mx-0">
      <Image
        imageURL={imageURL}
        alt={"product name"}
        className="rounded-md mb-2 h-52 w-full lg:object-cover"
      />
      <h3>{title}</h3>
      <p>{textSlicer(description)}</p>
      <div className="flex items-center my-4 space-x-2">
        <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer" />
      </div>
      <div className="flex items-center justify-between">
        <span>${price}</span>
        <Image
          imageURL={category.imageURL}
          alt={category.name}
          className="w-10 h-10 rounded-full object-bottom "
        />
      </div>
      <div className="flex justify-between space-x-2 items-center mt-5">
        <Button className="bg-indigo-700" width="w-full">
          Edit
        </Button>
        <Button className="bg-red-700 " width="w-full">
          Destroy
        </Button>
      </div>
    </div>
  );
};
export default ProductCard;
