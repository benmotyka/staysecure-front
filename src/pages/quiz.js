import NavbarClean from 'components/Navbar/NavbarClean'
import QuizWidget from 'components/Quiz/Quiz'
import {PageOneChild} from 'components/Pages/Pages.styles'
const quiz = (props) => {
    return (
        <>
            <NavbarClean/>
            <PageOneChild includeNavbar>
            <QuizWidget courseName={props.match.params.courseName}/>
            </PageOneChild>
        </>
    )
}

export default quiz
