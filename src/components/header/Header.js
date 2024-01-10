import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Hallo, Ich heiße <em>Oleh Omelchenko</em>
					</strong>
					<br />die Web-Entwickler
				</h1>
				<div className="header__text">
					<p>mit Leidenschaft fürs Lernen und Schaffen.</p>
				</div>
				<a href="https://drive.google.com/file/d/1F5L5Zr07O4B6k-tWYyKefeA2XVP0vL0G/view?usp=sharing" className="btn">
				Lebenslauf herunterladen
				</a>
			</div>
		</header>
	);
}

export default Header;