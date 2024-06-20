const MainSkeleton = () => {
  return (
    <div className="flex flex-col w-full h-full gap-4 bg-red-600">
      <div className="w-full h-32 skeleton"></div>
      <div className="h-4 skeleton w-28"></div>
      <div className="w-full h-4 skeleton"></div>
      <div className="w-full h-4 skeleton"></div>
    </div>
  );
};

export default MainSkeleton;
