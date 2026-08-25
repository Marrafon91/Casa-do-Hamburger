const Home = () => {
  return (
    <div className="mx-auto w-full px-3 text-white md:w-184.25 md:px-0">
      <div className="flex gap-2 py-4">
        <div className="md:text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border border-[#F2DAAC] bg-[#F2DAAC] text-sm font-bold text-[#161410] md:h-9 md:w-32">
          Hambúrger
        </div>
        <div className="md:text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border border-[#F2DAAC] bg-[#161410] text-sm font-bold text-[#F2DAAC] hover:bg-[#F2DAAC] hover:text-[#161410] md:h-9 md:w-32">
          Bebidas
        </div>
        <div className="md:text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border border-[#F2DAAC] bg-[#161410] text-sm font-bold text-[#F2DAAC] hover:bg-[#F2DAAC] hover:text-[#161410] md:h-9 md:w-32">
          Porções
        </div>
      </div>
    </div>
  );
};

export default Home;
