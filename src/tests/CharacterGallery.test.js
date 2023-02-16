import Character from '../components/Character'
import { shallow } from 'enzyme'
import checkPropTypes from 'check-prop-types'

const setup = () => shallow(<Character />)

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`)

describe('<Character/> component', () => {
    it('renders without error', () => {
        const wrapper = setup()
        expect(wrapper.length).toBe(1)
    })

    it('renders a div tag with a data-test attribute of character-card', () => {
        const wrapper = setup()
        const divTag = findByTestAttr(wrapper, 'character-card')
        expect(divTag).toHaveLength(1)

    })

    it('character-card div tag should also have a class of card', () => {
        const wrapper = setup()
        const divTag = findByTestAttr(wrapper, 'character-card')
        expect(divTag.hasClass('card-container')).toBe(true)
    })

    it('render a img tag with a data-test attribute of character-image', () => {
        const wrapper = setup()
        const imgTag = findByTestAttr(wrapper, 'character-image')
        expect(imgTag).toHaveLength(1)
    })

    it('render a div tag with a data-test attribute of character-body', () => {
        const wrapper = setup()
        const divTag = findByTestAttr(wrapper, 'character-body')
        expect(divTag).toHaveLength(1)
    })

    it('character-body should have a class of card-body', () => {
        const wrapper = setup()
        const divTag = findByTestAttr(wrapper, 'character-body')
        expect(divTag.hasClass('card-body')).toBe(true)
    })

    it('renders a h1 tag with a`data-test` attribute of `character-content', () => {
        const wrapper = setup()
        const h1Tag = findByTestAttr(wrapper, 'character-content')
        expect(h1Tag).toHaveLength(1)
    })
})

describe('<Character/> PropTypes Tests', () => {
    it('does not throw error when expected props are passed', () => {
        const expectedProps = {
            "id": 0,
            "firstName": "Jon",
            "lastName": "",
            "fullName": "Jon Snow",
            "title": "King of the North",
            "family": "House Stark",
            "image": "jon-snow.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/jon-snow.jpg"
        }

        const propError = checkPropTypes(
            Character.propTypes,
            expectedProps,
            'prop',
            Character.name
        )

        expect(propError).toBeUndefined()
    })
})