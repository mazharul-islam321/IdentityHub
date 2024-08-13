import InfoCard from "./common/InfoCard";
import user from "../assets/user.svg";
import call from "../assets/call.svg";
import mail from "../assets/mail.svg";
import credit_card from "../assets/credit_card.svg";
import password from "../assets/security_password.svg";
import lock from "../assets/square_lock.svg";

const PersonalData = () => {
	const data = [
		{
			id: 0,
			img: user,
			alt_text: "user name",
			first_text: "Username",
			second_text: "+1 (456) 453-3456",
		},
		{
			id: 1,
			img: call,
			alt_text: "Phone numbers",
			first_text: "Phone numbers",
			second_text: "+1 (456) 453-3456",
		},
		{
			id: 2,
			img: mail,
			alt_text: "Email address",
			first_text: "Email address",
			second_text: "+1 (456) 453-3456",
		},
		{
			id: 3,
			img: credit_card,
			alt_text: "Credit card",
			first_text: "Credit card",
			second_text: "+1 (456) 453-3456",
		},
		{
			id: 4,
			img: password,
			alt_text: "Password",
			first_text: "Password",
			second_text: "Kas3345-r32",
		},
		{
			id: 5,
			img: lock,
			alt_text: "One-time passcode",
			first_text: "One-time passcode",
			second_text: "Kas3345-r32",
		},
	];

	return (
		<section className=" md:flex md:items-center md:gap-4 py-10">
			<div className="grid md:grid-cols-2 flex-1 justify-center md:gap-4 md:ml-5 xl:ml-36 mb-5 md:mb-0">
				{data.map((item) => (
					<InfoCard
						key={item.id}
						img={item.img}
						alt_text={item.alt_text}
						first_text={item.first_text}
						second_text={item.second_text}
					/>
				))}
			</div>

			<div className="flex-1 md:ml-5 xl:ml-0">
				<p className="text-[#AFB3CA] text-4xl  font-medium text-center md:text-left  mx-6 md:mx-0 md:w-2/3 xl:w-1/2">
					Cloaking identities stand in for your personal data
				</p>

				<p className="text-[#AFB3CA] text-base  font-normal  text-center md:text-left  mt-7 mx-6  md:mx-0  xl:w-2/3">
					Forget about spam, advertising mailings, hacking and
					attacking robots. Keep your real mailbox clean and secure.
					Temp Mail provides temporary, secure, anonymous, free,
					disposable email address.
				</p>
			</div>
		</section>
	);
};

export default PersonalData;
