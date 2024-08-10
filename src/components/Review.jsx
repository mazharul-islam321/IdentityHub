import profile from "../assets/profile.jpg";

const Review = () => {
	return (
		<section className="py-10">
			<div className="text-center">
				<h1 className="text-[#CAD1E9] font-medium text-6xl my-3">
					The word on IdentityHub
				</h1>

				<p className="text-[#AFB3CA] text-base font-normal  mt-5 pb-8 w-2/4 mx-auto">
					Forget about spam, advertising mailings, hacking and
					attacking robots. Keep your real mailbox clean and secure.
					Temp Mail provides temporary, secure, anonymous, free,
					disposable email address.
				</p>
			</div>

			<div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4  gap-3  mx-28">
				{data.map((item) => (
					<div
						key={item.id}
						className="w-full h-min border border-solid rounded-[20px] border-[#2C2D47]/[1] bg-gradient-to-br from-[#1B1C36]/[.16] to-[#70717A]/[.16] p-3 break-inside-avoid mb-3"
					>
						<div className="flex items-center mb-5 mt-1">
							<img
								className="w-9 h-9 rounded-full mr-3 object-cover"
								src={item.img}
								alt="Avatar of Cameron Williamson"
							/>
							<div className="text-[#CAD1E9] font-medium text-xl">
								{item.name}
							</div>
						</div>
						<p className="text-[#AFB3CA] text-base font-normal">
							{item.review}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Review;

const data = [
	{
		id: 0,
		img: profile,
		name: "Cameron Williamson",
		review: "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address.",
	},
	{
		id: 1,
		img: profile,
		name: "Leslie Alexander",
		review: "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address. Stalkers and disgruntled acquaintances use the Internet to find addresses, phone numbers and other personal details about their targets. Identity thieves use personal information.",
	},
	{
		id: 2,
		img: profile,
		name: "Guy Hawkins",
		review: "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address. Identity thieves use personal information found online to impersonate their.",
	},
	{
		id: 3,
		img: profile,
		name: "Brooklyn Simmons",
		review: "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address.",
	},
	{
		id: 4,
		img: profile,
		name: "Darrell Steward",
		review: "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address.",
	},
	{
		id: 5,
		img: profile,
		name: "Floyd Miles",
		review: "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address.",
	},
	{
		id: 6,
		img: profile,
		name: "Savannah Nguyen",
		review: "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address.",
	},
	{
		id: 7,
		img: profile,
		name: "Cody Fisher",
		review: "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address.",
	},
];
