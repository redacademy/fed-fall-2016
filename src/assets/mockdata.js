// import { LOW, MEDIUM, HIGH } from './constants'

const LOW = "LOW"
const MEDIUM = "MEDIUM"
const HIGH = "HIGH"

/*The mock data should include:
locations: [{
    id,
    title,
    coordinate{
        latitude,
        longitude,
    },
    reviews,
    image urls,
}]
*/
export const mockLocations = [
     "ChIJW2wi48ZzhlQRMrotX09z9xw",
     "ChIJ2xyFx-FzhlQR7AmrwU4HwFk",
     "ChIJbW0YnsdzhlQR2mtc9pcWMWw",
     "ChIJP2FxnsdzhlQRtGPPIr583EQ",
     "ChIJx_AshMdzhlQRNYTKRxzKHGE",
     "ChIJ5Qg8CcdzhlQRLVzT-a95-FA",
     "ChIJh_Vsb8dzhlQRo3zWwxVDwbI",
     "ChIJFfDeDsdzhlQRqU3zGHTmMuk",
     "ChIJVTbKnMdzhlQR2eJyHFphPec",
     "ChIJk5Qv1cdzhlQRC9m9Hes_il8",
]
/*
users: [{
    id,
    username,
    email,
    password,
}]
*/
export const mockUsers = [{
    id: 0,
    name: "Bonnie Francis",
    email: "bonnie@mail.com",
    password: "Francis1",
},{
    id: 1,
    name: "Bob Frank",
    email: "frank@mail.com",
    password: "Frank1",
},{
    id: 2,
    name: "Fanny May",
    email: "fanny@mail.com",
    password: "Fanny1",
},{
    id: 3,
    name: "Fred Man",
    email: "fred@mail.com",
    password: "FredMan1",
},{
    id: 4,
    name: "Sarah Cooper",
    email: "sarah@mail.com",
    password: "Sarah1",
},{
    id: 5,
    name: "Stephen Chen",
    email: "stephen@mail.com",
    password: "Stephen1",
},{
    id: 6,
    name: "Tamara Smith",
    email: "tamara@mail.com",
    password: "Tamara1",
},{
    id: 7,
    name: "Tim Sutherland",
    email: "tim@mail.com",
    password: "Sutherland1",
},{
    id: 8,
    name: "Marie Kwon",
    email: "marie@mail.com",
    password: "Marie1",
},{
    id: 9,
    name: "Mohammad Khan",
    email: "mohammad@mail.com",
    password: "Mohammad1",
},{
    id: 10,
    name: "Suzy Major",
    email: "suzy@mail.com",
    password: "Major1",
},{
    id: 11,
    name: "Seth Minor",
    email: "seth@mail.com",
    password: "Seth",
}]

export const mockFullLocations = [{
    id: 0,
    title: "Boston Pizza",
    addressL1:"1333 W Broadway #190",
    addressL2:"Vancouver, BC V6H 4C1",
    place_id: "ChIJW2wi48ZzhlQRMrotX09z9xw",
    coordinate: {
        latitude: 49.26363504526748,
        longitude: -123.1346331524229,
    },
    amenities: {
        changeTable: true,
        nursingRoom: false,
        washroomGender: ["women"],
        familyWashroom: false,
        privacy: true,
        strollerAccessible: true,
        quiet: true,
        requiresKey: false,
    },
    ratings: {
        quality: MEDIUM,
        clean: MEDIUM,
        nursing: LOW,
        quiet: LOW,
    },
    photos: {
        url: "https://s-media-cache-ak0.pinimg.com/236x/25/20/f8/2520f8b0b1ccae6253e2975c766c334a.jpg"
    },
}, {
    id: 1,
    title: "Dennys",
    addressL1:"1296 W Broadway",
    addressL2:"Vancouver, BC V6H 1G6",
    place_id: "ChIJ2xyFx-FzhlQR7AmrwU4HwFk",
    coordinate: {
        latitude: 49.26327075476226,
        longitude: -123.1334386649043,
    },
    amenities: {
        changeTable: true,
        nursingRoom: false,
        washroomGender: ["women", "men"],
        familyWashroom: false,
        privacy: true,
        strollerAccessible: false,
        quiet: false,
        requiresKey: false,
    },
    ratings: {
        quality: MEDIUM,
        clean: MEDIUM,
        nursing: LOW,
        quiet: MEDIUM,
    },
    photos: {
        url: "https://s-media-cache-ak0.pinimg.com/236x/25/20/f8/2520f8b0b1ccae6253e2975c766c334a.jpg"
    },
}, {
    id: 2,
    title: "McDonalds",
    addressL1:"1482 W Broadway",
    addressL2:"Vancouver, BC V6H 1H4",
    place_id: "ChIJbW0YnsdzhlQR2mtc9pcWMWw",
    coordinate: {
        latitude: 49.26340736541866,
        longitude: -123.1379649641988,
    },
    amenities: {
        changeTable: true,
        nursingRoom: false,
        washroomGender: ["women", "men"],
        familyWashroom: false,
        privacy: true,
        strollerAccessible: false,
        quiet: false,
        requiresKey: false,
    },
    ratings: {
        quality: LOW,
        clean: LOW,
        nursing: LOW,
        quiet: LOW,
    },
    photos: {
        url: "https://pbs.twimg.com/profile_images/605432803560267776/Iun--DFs.jpg"
    },
}, {
    id: 3,
    title: "Blenz",
    addressL1:"2506 Granville St",
    addressL2:"Vancouver, BC V6H 3G8",
    place_id: "ChIJP2FxnsdzhlQRtGPPIr583EQ",
    coordinate: {
        latitude: 49.26341516675726,
        longitude: -123.1383673685654,
    },
    amenities: {
        changeTable: true,
        nursingRoom: false,
        washroomGender: ["women"],
        familyWashroom: false,
        privacy: true,
        strollerAccessible: true,
        quiet: false,
        requiresKey: true,
    },
    ratings: {
        quality: MEDIUM,
        clean: MEDIUM,
        nursing: LOW,
        quiet: MEDIUM,
    },
    photos: {
        url: "https://s-media-cache-ak0.pinimg.com/236x/25/20/f8/2520f8b0b1ccae6253e2975c766c334a.jpg"
    },
}, {
    id: 4,
    title: "Cactus Club",
    addressL1:"1530 W Broadway",
    addressL2:"Vancouver, BC V6J 5K9",
    place_id: "ChIJx_AshMdzhlQRNYTKRxzKHGE",
    coordinate: {
        latitude: 49.26336347313966,
        longitude: -123.1395691680608,
    },
    amenities: {
        changeTable: true,
        nursingRoom: true,
        washroomGender: ["women"],
        familyWashroom: false,
        privacy: true,
        strollerAccessible: true,
        quiet: false,
        requiresKey: false,
    },
    ratings: {
        quality: HIGH,
        clean: HIGH,
        nursing: MEDIUM,
        quiet: MEDIUM,
    },
    photos: {
        url: "https://redtricom.files.wordpress.com/2012/11/2011-03-louis-vuitton-dubai-mall-of-the-emirates-family-room-childrens.jpg"
    },
}, {
    id: 5,
    title: "Masa Japanese Restaurant",
    addressL1:"Canada, 1418 W Broadway",
    addressL2:"Vancouver, BC V6H 1H4",
    place_id: "ChIJ5Qg8CcdzhlQRLVzT-a95-FA",
    coordinate: {
        latitude: 49.26338133296119,
        longitude: -123.1363976499028,
    },
    amenities: {
        changeTable: true,
        nursingRoom: false,
        washroomGender: ["women"],
        familyWashroom: false,
        privacy: true,
        strollerAccessible: false,
        quiet: false,
        requiresKey: false,
    },
    ratings: {
        quality: LOW,
        clean: MEDIUM,
        nursing: LOW,
        quiet: MEDIUM,
    },
    photos: {
        url: "https://pbs.twimg.com/profile_images/605432803560267776/Iun--DFs.jpg"
    },
}, {
    id: 6,
    title: "Vancouver Public Library, Firehall Branch",
    addressL1:"1455 W 10th Ave",
    addressL2:"Vancouver, BC V6H 4C5",
    place_id: "ChIJh_Vsb8dzhlQRo3zWwxVDwbI",
    coordinate: {
        latitude: 49.26283545734029,
        longitude: -123.1375708324753,
    },
    amenities: {
        changeTable: true,
        nursingRoom: true,
        washroomGender: ["women", "men"],
        familyWashroom: false,
        privacy: true,
        strollerAccessible: true,
        quiet: false,
        requiresKey: true,
    },
    ratings: {
        quality: LOW,
        clean: MEDIUM,
        nursing: MEDIUM,
        quiet: HIGH,
    },
    photos: {
        url: "https://s-media-cache-ak0.pinimg.com/736x/c4/53/3b/c4533bea11c289d895be6caa320d4328.jpg"
    },
}, {
    id: 7,
    title: "JOEY Broadway",
    addressL1:"1424 W Broadway",
    addressL2:"Vancouver, BC V6H 1H4",
    place_id: "ChIJFfDeDsdzhlQRqU3zGHTmMuk",
    coordinate: {
        latitude: 49.26323518987539,
        longitude: -123.1369558751891,
    },
    amenities: {
        changeTable: true,
        nursingRoom: true,
        washroomGender: ["women", "men"],
        familyWashroom: true,
        privacy: true,
        strollerAccessible: true,
        quiet: false,
        requiresKey: false,
    },
    ratings: {
        quality: MEDIUM,
        clean: HIGH,
        nursing: LOW,
        quiet: LOW,
    },
    photos: {
        url: "https://s-media-cache-ak0.pinimg.com/236x/25/20/f8/2520f8b0b1ccae6253e2975c766c334a.jpg"
    },
}, {
    id: 8,
    title: "Starbucks",
    addressL1:"2505 Granville St",
    addressL2:"Vancouver, BC V6H 3G7",
    place_id: "ChIJVTbKnMdzhlQR2eJyHFphPec",
    coordinate: {
        latitude: 49.26311999384853,
        longitude: -123.1387782479117,
    },
    amenities: {
        changeTable: true,
        nursingRoom: false,
        washroomGender: ["women"],
        familyWashroom: false,
        privacy: true,
        strollerAccessible: true,
        quiet: false,
        requiresKey: false,
    },
    ratings: {
        quality: MEDIUM,
        clean: MEDIUM,
        nursing: LOW,
        quiet: LOW,
    },
    photos: {
        url: "https://s-media-cache-ak0.pinimg.com/236x/25/20/f8/2520f8b0b1ccae6253e2975c766c334a.jpg"
    },
}, {
    id: 9,
    title: "Pauls Omelettery",
    addressL1:"2211 Granville St",
    addressL2:"Vancouver, BC V6H 3G1",
    place_id: "ChIJk5Qv1cdzhlQRC9m9Hes_il8",
    coordinate: {
        latitude: 49.26592322194549,
        longitude: -123.1388885331834,
    },
    amenities: {
        changeTable: true,
        nursingRoom: false,
        washroomGender: ["women"],
        familyWashroom: false,
        privacy: true,
        strollerAccessible: false,
        quiet: false,
        requiresKey: false,
    },
    ratings: {
        quality: LOW,
        clean: MEDIUM,
        nursing: LOW,
        quiet: LOW,
    },
    photos: {
        url: "https://pbs.twimg.com/media/CTcF2ogW4AAIfoF.png"
    },
}]