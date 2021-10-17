import type { Rectangle, TypedRectangleGeometry } from './Rectangle';
import type { Circle, TypedCircleGeometry } from './Circle';
import type { Line, TypedLineGeometry } from './Line';

/**
 * All shape classes must implement this interface.
 */
export interface Indexable {
    /**
     * This method is called on all objects that are inserted into or retrieved from the Quadtree.
     * It must determine which quadrant an object belongs to.
     * @param node - Quadtree node to be checked
     * @returns Array containing indexes of intersecting subnodes (0-3 = top-right, top-left, bottom-left, bottom-right)
     */
    getIndex(node: NodeGeometry): number[]
}

/**
 * Interface for geometry of a Quadtree node
 */
export interface NodeGeometry {
    /**
     * X position of the node
     */
    x: number

    /**
     * Y position of the node
     */
    y: number

    /**
     * Width of the node
     */
    width: number

    /**
     * Height of the node
     */
    height: number
}

/**
 * Union type of any object with a valid `qtShape` property.
 * @beta
 */
export type TypedGeometry =
    | TypedRectangleGeometry
    | TypedCircleGeometry
    | TypedLineGeometry;

/**
* Union type of all shape classes.
* @beta
*/
export type Shape =
    | Rectangle
    | Line
    | Circle;