export const goToHomepage = (navigate) => {
    navigate("/")
};

export const goToFeedPage = (navigate) => {
    navigate("/feed")
};

export const goToAddressPage = (navigate) => {
    navigate("/address")
}

export const goToDetailPage = (navigate, id) => {
    navigate(`/details/${id}`)
}

export const goToSignupPage = (navigate) => {
    navigate("/signup")
}