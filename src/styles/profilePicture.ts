import {styled} from "./theme.ts";

export const ProfileButtonContainer = styled('div', {
    borderRadius: '4px',
    // padding: '.8rem 1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    img: {
        height: '3.125rem',
        width: '3.125rem',
        borderRadius: '50%'
    },
    button:{
        alignItems: 'flex-start',
        flexDirection: 'column',

        'span:first-child':{
            fontWeight: 'bold',
            fontSize: '1.4rem'
        }
    }

})