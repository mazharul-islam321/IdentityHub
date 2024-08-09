import HeaderText from "./common/HeaderText";
import InfoCard from "./common/InfoCard";
import SubHeaderText from "./common/SubHeaderText";
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
		<section className="lg:flex items-center pl-32 py-9">
			<div className="flex flex-wrap  w-1/2">
				{data.map((item) => (
					<div key={item.id} className="m-2">
						<InfoCard
							img={item.img}
							alt_text={item.alt_text}
							first_text={item.first_text}
							second_text={item.second_text}
						/>
					</div>
				))}
			</div>
			<div className="pt-8 lg:pt-4 w-1/2">
				<HeaderText text="Cloaking identities stand in for your personal data" />

				<SubHeaderText text="Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address." />
			</div>
		</section>
	);
};

export default PersonalData;
