const Contacts = () => {
    return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Kontakte</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">Standort</h2>
						<p>Ravensburg, Deutschland</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Telegram / WhatsApp</h2>
						<p>
							<a href="tel:+4916092436214">+49 (160) 924-36-214</a>
						</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Email</h2>
						<p>
							<a href="richwebapp@gmail.com">
							richwebapp@gmail.com
							</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Contacts;