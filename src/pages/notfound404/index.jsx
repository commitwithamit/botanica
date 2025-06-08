import svg from "../../assets/img/404.svg";
import { MainBtn } from "../../components/buttonsAndHeadings";
export function PageNotFound() {
    return (
        <section className="site-width pagenotfound">
            <div>
                <img src={svg} alt="404 page not found" />
                <div>
                    <h3>Oops! This Page is Un-Plant-able!</h3>
                    <MainBtn info={{ name: "Go to Homepage", path: "/" }} />
                </div>
            </div>
        </section>
    )
}