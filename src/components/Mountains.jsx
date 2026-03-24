export default function Mountains(){
  return (
    <div className="relative bottom-0 left-0 w-full h-[187px] pointer-events-none">
      <div
        className="absolute bottom-0 w-full h-full bg-mtn-back
        [clip-path:polygon(0%_100%,_0%_10%,_3%_0%,_25%_31%,_38.5%_0%,_55%_9%,_68%_20%,_75.5%_0%,_100%_25%,_100%_100%)]"
      />
      <div
        className="absolute bottom-0 w-full h-full bg-mtn-mid
        [clip-path:polygon(0%_100%,_0%_43%,_24.2%_0%,_40%_33%,_61.5%_0%,_77.1%_29%,_79.5%_22%,_84.9%_31.5%,_97.5%_0%,_100%_4%,_100%_100%)]"
      />

      <div
        className="absolute bottom-0 w-full h-full bg-mtn-front
        [clip-path:polygon(0%_100%,_0%_43%,_24.2%_0%,_33.9%_44%,_39%_22%,_61.5%_0%,_72.5%_44%,_79.5%_22%,_83%_36.5%,_97.5%_0%,_100%_12%,_100%_100%)]"
      />
    </div>
  );
};
