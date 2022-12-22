import './headerButtonStyle.css'

export const HeaderButton = ({textButton}) => {
    return  <>
                <button className="buttonHeaderStyle">
                    {textButton}
                </button>
            </>
}