import PriceCard from "./PriceCard";

const Pricing = () => {
	return (
		<section className="py-10">
			<div className="text-center mb-4">
				<h1 className="text-[#CAD1E9] font-medium text-6xl my-3">
					Pricing
				</h1>

				<p className="text-[#AFB3CA] text-base font-normal  mt-5 pb-8 w-1/3 mx-auto">
					You can stay on the $56 plan until you have enough active
					user to justify managing their data or you start settings
					things.
				</p>
			</div>

			<div className="flex justify-center mb-16">
				<div className="flex h-14 w-[358px] items-center justify-center bg-gradient-to-br from-[#4E4E69]/[0.3] to-[#4E4E69]/[1] rounded-xl text-[#CAD1E9] p-px">
					<div className="relative inline-flex h-full w-full items-center  text-lg  bg-gradient-to-t from-[#21223C] to-[#0B0B26] rounded-xl">
						<a className="relative inline-flex h-12 w-[181px] items-center justify-center text-lg  bg-gradient-to-t from-[#21223C] to-[#0B0B26] border border-solid rounded-xl border-[#2C2D47] ml-0.5">
							Billed yearly -20%
						</a>
						<span className="relative inline-flex h-12 w-[176px] items-center justify-center">
							Billed monthly
						</span>
					</div>
				</div>
			</div>

			<div className="flex justify-center">
				<div className="lg:flex lg:items-center lg:justify-center  gap-6 pb-10">
					{data.map((item) => (
						<PriceCard key={item.id} item={item} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Pricing;

const data = [
	{
		id: 0,
		member: "Start here",
		price: 0,
		facilities: [
			{
				id: 0,
				type: true,
				text: "Type of threat",
			},
			{
				id: 1,
				type: true,
				text: "Online presence",
			},
			{
				id: 2,
				type: true,
				text: "Access to all modules",
			},
			{
				id: 3,
				type: false,
				text: "Notability",
			},
			{
				id: 4,
				type: false,
				text: "Optimize existing websites",
			},
			{
				id: 5,
				type: false,
				text: "Search autocomplete",
			},
		],
		isFree: "It's free so why not",
	},
	{
		id: 1,
		member: "Single",
		price: 56,
		facilities: [
			{
				id: 0,
				type: true,
				text: "Type of threat",
			},
			{
				id: 1,
				type: true,
				text: "Online presence",
			},
			{
				id: 2,
				type: true,
				text: "Access to all modules",
			},
			{
				id: 3,
				type: true,
				text: "Notability",
			},
			{
				id: 4,
				type: true,
				text: "Optimize existing websites",
			},
			{
				id: 5,
				type: true,
				text: "Search autocomplete",
			},
		],
		isFree: "Save $23per year",
	},
	{
		id: 2,
		member: "Family",
		price: 124,
		facilities: [
			{
				id: 0,
				type: true,
				text: "Type of threat",
			},
			{
				id: 1,
				type: true,
				text: "Online presence",
			},
			{
				id: 2,
				type: true,
				text: "Access to all modules",
			},
			{
				id: 3,
				type: true,
				text: "Notability",
			},
			{
				id: 4,
				type: true,
				text: "Optimize existing websites",
			},
			{
				id: 5,
				type: true,
				text: "Search autocomplete",
			},
		],
		isFree: "Save $23per year",
	},
];
