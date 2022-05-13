export const handleScrollTopClick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

export const showGoToTopBnt = (showEl) => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            showEl(true)
        } else {
            showEl(false)
        }
    })
}

export const serverRequest = (hook, url, setState, deps) => {
    hook(() => {
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then(setState)
    }, [deps])
}
