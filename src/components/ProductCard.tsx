import Image from "./Image";
import Button from "./ui/Button";
const ProductCard = () => {
  return (
    <div className="border rounded-md p-2 flex flex-col m-2">
      <Image
        imageURL="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&
        ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt={"product name"}
        className="rounded-md mb-2"
      />
      <h3>2022 Genesis GV60</h3>
      <p>
        As luxury brand go , South Korea's Genesis is still in its infancy ,
        having sold its first cars (as an independent hyunda)
      </p>
      <div className="flex items-center my-4 space-x-2">
        <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer" />
      </div>
      <div className="flex items-center justify-between">
        <span>$500,000</span>
        <Image
          imageURL="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&
        ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt={"product name"}
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
        <Button className="bg-green-700">Success</Button>
        <Button className="bg-gray-400">Cancel</Button>
      </div>
    </div>
  );
};
export default ProductCard;
