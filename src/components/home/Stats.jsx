const Stats = () => {
    const statsData = [
        {
            label: "Total Downloads",
            value: "29.6M",
            growth: "21% More Than Last Month"
        },
        {
            label: "Total Reviews",
            value: "906K",
            growth: "46% More Than Last Month"
        },
        {
            label: "Active Apps",
            value: "132+",
            growth: "31 More Will Launch"
        }
    ];

    return (
        <section className="bg-primary text-white py-10 -mt-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">Trusted By Millions, Built For You</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {statsData.map((stat, index) => (
                        <div key={index}>
                            <p className="text-sm opacity-80">{stat.label}</p>
                            <h3 className="text-5xl font-bold mt-2">{stat.value}</h3>
                            <p className="text-sm opacity-80 mt-2">{stat.growth}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;