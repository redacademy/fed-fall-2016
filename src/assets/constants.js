
// LOW/MEDIUM/HIGH ratings for key amenities
export const LOW = 3
export const MEDIUM = 2
export const HIGH = 1

export const filterList = [
    { iconName: 'baby-change-table', iconText: 'CHANGE TABLE', isSelected: false},
    { iconName: 'breast-feeding', iconText: 'NURSING ROOM', isSelected: false },
    { iconName: 'male', iconText: 'MENS\nWASHROOM' , isSelected: false}, 
    { iconName: 'female', iconText: 'WOMENS\nWASHROOM' , isSelected: false},
    { iconName: 'family', iconText: 'FAMILY\nWASHROOM', isSelected: false },
    { iconName: 'mask', iconText: 'PRIVATE', isSelected: false },
    { iconName: 'stroller-accessible', iconText: 'STROLLER\nACCESS', altIconName: 'stroller-inaccessible', altIconText: 'STROLLER\nINACCESS', isSelected: false},
    { iconName: 'key', iconText: 'REQUIRES KEY', isSelected: false },
]

//TODO: use icon-title-mapping instead