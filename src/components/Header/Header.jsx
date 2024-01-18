import todoLogo from './todorobot.png';

function Header({ title }) {
    return (
        <header>
            <div>
                <img src={todoLogo} width={250} height={250} alt="todo logo" />
            </div>
            <div>
                <h1>{title}</h1>
            </div>
        </header>

    );
}

export default Header;