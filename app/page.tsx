import Navbar from "./_components/_navbar/navbar";
import RadioColor from "./_components/_radioColor/radioColor";
import radioColor from "./_components/_radioColor/radioColor";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Navbar />

      <div className="flex items-center justify-center flex-col space-y-5">
        <h1 className="text-7xl font-semibold mt-18 items-center text-center">
          Tailwind CSS 
        </h1>
        <h3 className="text-4xl">Color Palette Generator</h3>
        <p className="text-xl w-1/2">
          Pick a color, enter a hexcode or change the HSL values to create a color palette
        </p>

        <RadioColor />
      </div>
    </div>
  );
}
