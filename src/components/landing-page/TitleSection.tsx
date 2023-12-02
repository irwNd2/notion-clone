interface TitleSectionProps {
  title: string;
  subheading?: string;
  pill: string;
}

const TitleSection: React.FC<
  TitleSectionProps
> = ({ title, subheading, pill }) => {
  return (
    <>
      <section className="flex flex-col justify-center items-start gap-4 md:items-center">
        <article className="rounded-full p-[1px] text-sm dark:bg-gradient-to-r dark:from-cyan-900 dark:to-green-900">
          <div className="rounded-full border border-brand-primaryPurple px-3 py-1 dark:bg-black">
            {pill}
          </div>
        </article>
        {subheading ? (
          <>
            <h2 className="text-left text-3xl sm:text-5xl sm:max-w-[750px] md:text-center font-semibold">
              {title}
            </h2>
            <p className="dark:text-green-200 sm:max-w-[450px] md:text-center">
              {subheading}
            </p>
          </>
        ) : (
          <h1 className="text-left text-4xl sm:text-6xl sm:max-w-[850px] md:text-center font-semibold">
            {title}
          </h1>
        )}
      </section>
    </>
  );
};

export default TitleSection;
