import { Mask, TerrainType } from "../types/Config";
import { DungeonPMDO } from "../types/enum/Dungeon";
import Tileset, { TilesetTiled } from "./tileset";
export type LayerTiled = {
    data: number[];
    height: number;
    id: number;
    name: string;
    opacity: number;
    type: string;
    visible: boolean;
    width: number;
    x: number;
    y: number;
};
export type DesignTiled = {
    compressionlevel: number;
    height: number;
    infinite: boolean;
    layers: LayerTiled[];
    nextlayerid: number;
    nextobjectid: number;
    orientation: string;
    renderorder: string;
    tiledversion: string;
    tileheight: number;
    tilesets: TilesetTiled[];
    tilewidth: number;
    type: string;
    version: string;
    width: number;
};
export type TileMapping = {
    id: number;
    layerId: string;
};
export default class Design {
    id: DungeonPMDO;
    terrain: TerrainType[][];
    bitmask: Mask[][];
    layers: TileMapping[][];
    width: number;
    height: number;
    frequency: number;
    persistance: number;
    tileset: Tileset;
    arenaRect: [x1: number, y1: number, x2: number, y2: number];
    wallRect: [x1: number, y1: number, x2: number, y2: number];
    constructor(id: DungeonPMDO, frequency: number, persistance: number, width?: number, height?: number, arenaRect?: [x1: number, y1: number, x2: number, y2: number], wallRect?: [x1: number, y1: number, x2: number, y2: number]);
    create(): void;
    generateTerrain(): void;
    drawGroundRect(x: number, y: number, width: number, height: number): void;
    generateMask(): void;
    generateLayers(): void;
    exportLayerToTiled(): {
        data: number[];
        height: number;
        id: number;
        name: string;
        opacity: number;
        type: string;
        visible: boolean;
        width: number;
        x: number;
        y: number;
    }[];
    getDataLayer(layerId: string): number[];
    getLayerNames(): string[];
    exportToTiled(): DesignTiled;
}
export declare function initTilemap(mapName: DungeonPMDO): DesignTiled;
