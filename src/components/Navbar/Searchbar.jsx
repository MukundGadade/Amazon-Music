import {ReactComponent as SearchIcon} from './../../assets/SearchIcon.svg';

export const Searchbar = () => {

    return (

        <section className="searchbar-container">
            <input type="text" name="search" id="search" placeholder="Search" />
            <SearchIcon />
        </section>
        
    )

}