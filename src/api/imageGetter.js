import { updateCache, getFromCache } from "../api/cache";
import unsplash from "../api/unsplash";

// Returns data from local storage if exists
// Sends request and returns response data if not
const imageGetter = async (term, collection, page) => {
  const cachedRes = getFromCache([term, collection, page]);
  if (cachedRes !== null) {
    return [cachedRes, null];
  } else {
    try {
      const res = await unsplash.get("/search/photos", {
        params: {
          query: term,
          page,
          per_page: 9,
          collections: collection
        }
      });
      updateCache([term, collection, page], res.data);
      return [res.data, null];
    } catch (e) {
      if (e.response)
        return [null, "" + e.response.status + " " + e.response.data.errors[0]];
    }
  }
  return [null, "Something went wrong"];
};

export default imageGetter;
