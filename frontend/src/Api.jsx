const API_BASE_URL = (
	import.meta.env.DEV
		? "http://localhost:5000"
		: import.meta.env.VITE_API_URL || "https://ma-groups.onrender.com"
).replace(/\/$/, "");

export default API_BASE_URL;