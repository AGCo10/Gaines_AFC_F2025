// exporting a function from this helpers file allows us to access it anywhere within our application by using the appropriate paths
export function calcArea(width: number, length: number):number => {
    return width * length;
}

export function calcPerimeter(width: number, length: number):number => {
    return (width * 2) + (length * 2);
}