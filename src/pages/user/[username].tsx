import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function UserPage() {
  const router = useRouter();
  const { username } = router.query;
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("/api/user/getUserByUsername", {
          params: { username },
        });
        setUser(response.data.user);
      } catch (error) {
        // Handle the error, e.g., user not found
        setUser(null);
      }
    };

    if (username) {
      fetchUser();
    }
  }, [username]);

  return user ? (
    <div>
      Username is @<span>{user.username}</span>
    </div>
  ) : (
    <div>User not found</div>
  );
}
