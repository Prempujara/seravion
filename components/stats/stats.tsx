const stats = [
 { value: "50+", label: "Projects Delivered" },
 { value: "12+", label: "Countries Served" },
 { value: "98%", label: "Client Satisfaction" },
 { value: "5+", label: "Years of Excellence" },
];
const Stats = () => {
 return (
   <section className="bg-white border-y border-gray-100 py-14 px-6">
     <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
       {stats.map((stat, i) => (
         <div key={i} className="flex flex-col items-center text-center gap-1">
           <span className="text-4xl md:text-5xl font-semibold text-black tracking-tight">
             {stat.value}
           </span>
           <span className="text-gray-500 text-sm font-light mt-1">{stat.label}</span>
         </div>
       ))}
     </div>
   </section>
 );
};
export default Stats;
