import { useEffect } from 'react'
import './listCardsStyle.css'
import { FaEdit, FaTrash } from 'react-icons/fa';
const Swal = require('sweetalert2')

export const ListCards = ({name, description, url, platform, isDeletedTrue, isEditedTrue}) => {

    const deleteVideogame = () => {
        Swal.fire({
            title: `Are you sure you want to delete ${name}?`,
            text: "If you delete it, it will disappear from your list",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                `${name} has been deleted`,
                'success'
              )
            }
          })
    }

    const Buttons = () => {
        const buttons = []

        if(isDeletedTrue) buttons.push(<><button className='buttonList deleteButtonList' onClick={() => deleteVideogame()}><FaTrash className='deleteButtonChikito' /></button><br/></>)
        if(isEditedTrue) buttons.push(<button className='buttonList editButtonList'><FaEdit className='editButtonChikito'/></button>)

        return(buttons)
    }

    useEffect(() => {
        Buttons()
    })

    return( 
        <div>
            <div className='listCardCard'>
            <div className='buttonContainerList'>
                <Buttons></Buttons>
            </div>
                <div className='imageListCard'>
                    <img alt={url} src={url}></img>
                </div>
                <div className='nameDescriptionContainer'>
                    <div className='nameOfCard'>
                        <b>{name}</b>
                    </div>
                    <div className='descriptionOfCard'>
                        {description}
                    </div>
                    <div className='descriptionOfCard'>
                        {platform}
                    </div>
                </div>
            </div>       
        </div>   
    )
}