function assert(condition, message) {
  if (condition) {
    console.log(`PASS: ${message}`);
  } else {
    console.error(`FAIL: ${message}`);
    process.exit(1);
  }
}

class PopoverController {
  constructor() {
    this.isOpen = false;
    this.placement = "bottom";
  }

  open() {
    this.isOpen = true;
    return this.isOpen;
  }

  close() {
    this.isOpen = false;
    return this.isOpen;
  }

  toggle() {
    this.isOpen = !this.isOpen;
    return this.isOpen;
  }

  setPlacement(p) {
    const valid = ["top", "bottom", "left", "right"];
    if (valid.includes(p)) {
      this.placement = p;
    }
    return this.placement;
  }

  handleKeyDown(key) {
    if (key === "Escape" && this.isOpen) {
      this.close();
      return true;
    }
    return false;
  }

  handleClickOutside(isInsideTrigger, isInsidePopover) {
    if (!isInsideTrigger && !isInsidePopover && this.isOpen) {
      this.close();
      return true;
    }
    return false;
  }
}

console.log("Running Popover Unit Tests...\n");

const popover = new PopoverController();

// Test 1: Initial state is closed
assert(popover.isOpen === false, "Popover initial state is closed");

// Test 2: Open method opens popover
popover.open();
assert(popover.isOpen === true, "Popover opens correctly");

// Test 3: Close method closes popover
popover.close();
assert(popover.isOpen === false, "Popover closes correctly");

// Test 4: Toggle method toggles state
popover.toggle();
assert(popover.isOpen === true, "Popover toggle opens when closed");
popover.toggle();
assert(popover.isOpen === false, "Popover toggle closes when open");

// Test 5: Escape key closes popover
popover.open();
const escaped = popover.handleKeyDown("Escape");
assert(escaped === true && popover.isOpen === false, "Escape key closes active popover");

// Test 6: Outside click closes popover
popover.open();
const outsideHandled = popover.handleClickOutside(false, false);
assert(outsideHandled === true && popover.isOpen === false, "Clicking outside closes active popover");

// Test 7: Inside click does not close popover
popover.open();
popover.handleClickOutside(false, true);
assert(popover.isOpen === true, "Clicking inside popover retains open state");

// Test 8: Placement validation
popover.setPlacement("top");
assert(popover.placement === "top", "Placement updates to valid value (top)");
popover.setPlacement("invalid");
assert(popover.placement === "top", "Invalid placement is rejected");

console.log("\nAll 8 Popover unit tests passed successfully!");
