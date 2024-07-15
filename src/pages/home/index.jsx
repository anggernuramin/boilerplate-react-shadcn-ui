import InlineEditTable from "../../components/organism/InlineEditTable";

const Home = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen ">
      {/* <DataTable /> */}
      <section className=" w-[55%] overflow-hidden">
        <InlineEditTable />
      </section>
    </div>
  );
};

export default Home;
