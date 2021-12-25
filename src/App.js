import './Master.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/Header'
import StoryCard1 from './components/story_card-1/StoryCard1'
import StoryCard2 from './components/story_card-2/StoryCard_2'
import StoryCard3 from './components/story_card-3/StoryCard_3'
import StoryCard4 from './components/story_card-4/StoryCard_4'

function App() {
  return (
    <>
      <Header />
      <StoryCard1 />
      <StoryCard2 />
      <StoryCard3 />
      <StoryCard4 />
    </>
  )
}

export default App
