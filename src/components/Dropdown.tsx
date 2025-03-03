/** @format */

interface DropdownProps {
  content: {
    title: string;
    subNav: {
      heading: string;
      subHeading: string;
      icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement> & React.RefAttributes<SVGSVGElement>>;
    }[];
  }[];
}

const Dropdown = ({ content }: DropdownProps) => {
  console.log(content.length);
  return (
    <div
      className={`bg-black px-8 w-max mx-auto grid border border-[#CCCCCC]/20 rounded-md ${
        content.length == 3 ? "grid-cols-3" : "grid-cols-2"
      } gap-8`}
    >
      {content.map((navContent) => (
        <div key={navContent.title} className="space-y-6 w-full">
          <div className="" />
          <p className="text-sm text-neutral-500">{navContent.title}</p>
          <div className="space-y-4">
            {navContent.subNav.map(
              (item) =>
                item.heading && (
                  <div key={item.heading}>
                    <div className="flex items-start space-x-3 group cursor-pointer">
                      <div className="flex-shrink-0 p-2 bg-black rounded-md border-[#CCCCCC]/20 border">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm group-hover:text-neutral-100 transition-colors">
                          {item.heading}
                        </h3>
                        <p className="text-xs text-neutral-500">
                          {item.subHeading}
                        </p>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      ))}
      <div className="" />
    </div>
  );
};

export default Dropdown;
