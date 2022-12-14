import {BuilderWithMiddleware, SetupBuilder} from "../../../utils/builderWithMiddleware";
import {Dice} from "../enums/dice";
import {Item, ItemActions, ItemRating, WeaponItem} from "../models/itemModels";

/** The highest-order parent of any item classes */
class ItemBuilder<T extends Item> extends BuilderWithMiddleware<T> {
    constructor(setup?: SetupBuilder<T>) { super(setup) }
    /** Set weapon name with runtime validation */
    setName(name: string) { this.setAttr("name", name) }
    /** Set actions a weapon can perform on a combat turn */
    setActions(actions: ItemActions) { this.setAttr("actions", actions) }
    /** Set the rating of the weapon */
    setRating(rating: ItemRating) { this.setAttr("rating", rating) }
}
/** Build a weapon item */
export class WeaponBuilder extends ItemBuilder<WeaponItem> {
    constructor(setup?: SetupBuilder<WeaponItem>) { super(setup) }
    /** Set the range this weapon's attacks carry */
    setRange(range: number) { this.setAttr("range", range) }
    /** Set the damage dice for a weapon's attack
     *  @example
     *  this.setDamage(2, "d12") // value: 2d12
     */
    setDamage(count: number, die: Dice) { this.setAttr("damage", `${count}${die}`) }
    /** Set an optional attack limit */
    setLimit(limit: number) { this.setAttr("limit", limit) }
}
// export class ArmourBuilder extends ItemBuilder<Armour> {}
// export class MaterialBuilder extends ItemBuilder<Material> {}
