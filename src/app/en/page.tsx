import TitleSection from "@/components/landing-page/TitleSection";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <section className="overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center">
      <TitleSection
        pill="Your workspace, perfected"
        title="All-in-one Collaboration and Productivity Platform"
      />
      <div className="bg-white p-0.5 mt-6 rounded-xl bg-gradient-to-r from-brand-primaryBlue to-brand-primaryPurple sm:w-[300px]">
        <Button
          variant="ghost"
          className="w-full rounded-[10px] p-6 text-2xl bg-background"
        >
          Get Free Workspace
        </Button>
      </div>
      {/* <div className="md:mt-[-90px] sm:w-full w-[750px] flex justify-center items-center mt-[-40px] relative sm:ml-0 ml-[-50px]">
        <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
      </div> */}
    </section>
  );
};

export default HomePage;
