import CreditCard from '../creditcard/creditcard';
import Payment from '../payment/payment';

function HomeSection3() {
	return (
		<>
			<div className="flex flex-col justify-center items-center mt-14">
				<h2 className="text-3xl font-bold text-neutral">
					<u className="text-accent-focus dark:text-primary">Donate</u> to a Shelter
				</h2>
				<h2 className="mb-16 font-bold">--using a simple and fast online transaction--</h2>

				<CreditCard />
				<div className="my-20">
					<Payment />
				</div>
			</div>
		</>
	);
}

export default HomeSection3;
