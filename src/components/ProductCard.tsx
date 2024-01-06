import { IProduct } from "../interfaces";
import { textSlicer } from "../utils/functions";
import Image from "./Image";
import Button from "./ui/Button";
import CircleColor from "./CircleColor";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { title, description, imageURL, price, colors, category } = product;
  /*________RENDER________*/
  const renderProductColors = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));

  return (
    <div className="max-w-sm md:max-w-lg mx-auto border rounded-md p-2 flex flex-col md:mx-0">
      <Image
        imageURL={imageURL}
        alt={"product name"}
        className="rounded-md mb-2 h-52 w-full lg:object-cover"
      />
      <h3>{title}</h3>
      <p>{textSlicer(description)}</p>
      <div className="flex item-center flex-wrap space-x-1">
        {renderProductColors}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-indigo-700">${price}</span>
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
