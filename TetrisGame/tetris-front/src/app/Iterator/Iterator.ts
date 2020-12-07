export interface Iterator {
    next();
    currentX(): number;
    currentY(): number;
    validX(): boolean;
    validY(): boolean;
}