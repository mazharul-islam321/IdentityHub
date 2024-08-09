import HeaderText from "../common/HeaderText";
import SubHeaderText from "../common/SubHeaderText";

const PrivateInfo = () => {
	return (
		<section className="flex">
			<div>
				<HeaderText text="We remove your private information from the online" />

				<SubHeaderText text="People-search sites use government records and online databases to create detailed profiles of virtually every citizen." />
				<SubHeaderText text="They then sell this sensitive information online, where it can end up in the hands of hackers, identity thieves, and stalkers." />
				<SubHeaderText text="ReputationDefender stops people-search sites by opting our clients out of them." />
			</div>

			<div className="w-[489px] h-[343px] bg-slate-400 relative">
				<div className="w-[489px] h-[343px] bg-red-300 absolute -left-9">
					<div className="w-[260px] h-[23px] bg-white rounded"></div>
					<div>
						<img src="" alt="" />
					</div>
					<div>
						<img src="" alt="" />
					</div>

					<button>Delete</button>
				</div>
			</div>
		</section>
	);
};

export default PrivateInfo;
