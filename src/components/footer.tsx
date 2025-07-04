function Footer() {
    return (
        <footer className="my-10 p-3 absolute bottom-0">
            <ul className="flex gap-x-5">
                <li>
                    <a className="hover:underline" href="">linkedin</a>
                </li>
                <li>
                    <a className="hover:underline" href="">
                        github
                    </a>
                </li>
                <li>
                    <a className="hover:underline" href="">
                        email
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;