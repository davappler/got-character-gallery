import App from '../App'
import CharacterGallery from '../components/CharacterGallery'
import { shallow } from 'enzyme'

// Prompt 1: Develop a `setup` function in each test suite that returns a shallow render of the component
const setup = () => shallow(<App />)
export const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`)


describe('<App/> component', () => {
  // Prompt 2: The component Renders
  it('renders', () => {
    const wrapper = setup()
    expect(wrapper.length).toBe(1)
  })


  // Prompt 3: Should render a div tag with a `data-test` attribute of `app-container`
  it('contains a div tag with a`data-test` attribute of`app-container`', () => {
    const wrapper = setup()
    const divTag = findByTestAttr(wrapper, 'app-container')
    expect(divTag).toHaveLength(1)
  })

  // Prompt 4: h1 tag with a`data-test` attribute of`site-title`
  it('contains a h1 tag with a data-test attribute of site-title', () => {
    const wrapper = setup()
    const h1Tag = findByTestAttr(wrapper, 'site-title')
    expect(h1Tag).toHaveLength(1)
  })

  // Prompt 5: The site-title h1's innerText should be`A Song of Fire and Ice`
  it('site-title h1\'s innerText should be A Song of Fire and Ice', () => {
    const wrapper = setup()
    const h1TagText = findByTestAttr(wrapper, 'site-title').text()
    expect(h1TagText).toBe('A Song of Fire and Ice')
  })

  // Prompt 6: The App component should render a single instance of the`CharacterGallery`
  it('should render a single instance of the CharacterGallery', () => {
    const wrapper = setup()
    expect(wrapper.find(CharacterGallery)).toHaveLength(1)
  })
})