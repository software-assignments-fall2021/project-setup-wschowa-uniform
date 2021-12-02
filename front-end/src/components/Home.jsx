import "./Home.css"
import SearchBar from "./SearchBar"
import HomePagePost from "./HomePagePost"
import axios from "axios"
import { useState, useEffect, React } from "react"
function Home() {
	const [posts, setPosts] = useState([])
	useEffect(() => {
		axios
			.get("/home")
			.then((res) => {
				console.log("fetch")
				setPosts(res.data)
				console.log(res.data)
			})
			.catch((e) => {
				console.log(e)
			})
	}, [])
	return (
		<div>
			{/* <SearchBar/> */}
			<section>
				{posts.map((item) => (
					<HomePagePost key={item._id} details={item} />
				))}
			</section>
		</div>
	)
}
export default Home
