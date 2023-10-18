function SearchPage() {
	return (
		<>
			<div className="join flex flex-wrap justify-center items-center">
				<div>
					<div>
						<input className="input input-bordered join-item" placeholder="Search" />
					</div>
				</div>

				{/* <select className="select select-bordered join-item">
					<option selected>--Pet--</option>
					<option>Dog</option>
					<option>Cat</option>
				</select>
				<select className="select select-bordered join-item">
					<option selected>--Breed--</option>
					<option>Breed1</option>
					<option>Breed2</option>
					<option>Breed3</option>
					<option>Breed4</option>
					<option>Breed5</option>
					<option>Breed6</option>
				</select>
				<select className="select select-bordered join-item">
					<option selected>--Age--</option>
					<option>New Born</option>
					<option>Middle Aged</option>
					<option>Senior</option>
				</select>
				<select className="select select-bordered join-item">
					<option selected>--Color--</option>
					<option>Orange</option>
					<option>Brown</option>
					<option>Black</option>
				</select> */}
				<div className="indicator">
					<button className="btn btn-outline btn-accent join-item bg-base-300">Search</button>
				</div>
			</div>
		</>
	);
}

export default SearchPage;
