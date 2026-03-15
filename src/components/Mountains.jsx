const Mountains = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-44 pointer-events-none">
      <div
        className="absolute bottom-0 w-full h-full bg-mtn-back
        [clip-path:polygon(0%_100%,_0%_10%,_3%_0%,_25%_31%,_38.5%_0%,_55%_9%,_68%_20%,_75.5%_0%,_100%_25%,_100%_100%)]"
      />
      <div
        className="absolute bottom-0 w-full h-full bg-mtn-mid
        [clip-path:polygon(0%_100%,_0%_42%,_24.4%_0%,_40%_33%,_61.5%_0%,_77.1%_27.1%,_79%_21%,_84.9%_29.4%,_96.8%_0%,_100%_4%,_100%_100%)]"
      />

      <div
        className="absolute bottom-0 w-full h-full bg-mtn-front
        [clip-path:polygon(0%_100%,_0%_42%,_24.4%_0%,_34.1%_42.5%,_39%_22%,_61.5%_0%,_72.3%_43%,_79%_21%,_82.5%_35.6%,_96.8%_0%,_100%_15%,_100%_100%)]"
      />
    </div>
  );
};

export default Mountains;
