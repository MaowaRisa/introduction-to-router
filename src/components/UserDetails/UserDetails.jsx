import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    console.log(user);
    const {name, website} = user;
    return (
        <div>
            <h2>User details of {name}</h2>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;