export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";


export const addToFavouriteAction = (JobSelected) => ({
  type: ADD_TO_FAVOURITE,
  payload: JobSelected,
});

export const removeFromFavouriteAction = (i) => ({ type: REMOVE_FROM_FAVOURITE, payload: i });

export const getJobsAction = () => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=");
      if (resp.ok) {
        let fetchedJobs = await resp.json();

        dispatch({
          type: ADD_TO_FAVOURITE,
          payload: fetchedJobs,
        });
      } else {
        dispatch({
          type: ADD_TO_FAVOURITE_ERROR,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: ADD_TO_FAVOURITE_ERROR,
      });
    }
  };
};
