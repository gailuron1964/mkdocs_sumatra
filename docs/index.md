# Scowl demo

For full documentation visit [mkdocs.org](https://www.mkdocs.org).

## Example 1

<div class="scowl-container">
  <div class="scowl-example">
    <code>CountUnique(user by ip)</code>
    <table>
      <thead>
        <tr>
          <th>ip</th>
          <th>user</th>
          <th>CountUnique(user by ip)</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>1.1.1.1</td>
        <td>anna</td>
        <td>1</td>
      </tr>
      <tr>
        <td>2.2.2.2</td>
        <td>brad</td>
        <td>1</td>
      </tr>
      <tr>
        <td>1.1.1.1</td>
        <td>cela</td>
        <td>2</td>
      </tr>
      <tr>
        <td>1.1.1.1</td>
        <td>anna</td>
        <td>2</td>
      </tr>
      </tbody>
    </table>
    <a href="#" class="btn-sandbox" data-scowl-query="CountUnique(user by ip)">
      Try in Sandbox
    </a>
  </div>
</div>


## Example 2

<div class="scowl-container">
  <div class="scowl-example">
    <code>Count(user by ip where ip.Contains('1'))</code>
    <table>
      <thead>
        <tr>
          <th>ip</th>
          <th>user</th>
          <th>Count(user by ip where ip.Contains('1'))</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>1.1.1.1</td>
        <td>anna</td>
        <td>1</td>
      </tr>
      <tr>
        <td>2.2.2.2</td>
        <td>brad</td>
        <td>0</td>
      </tr>
      <tr>
        <td>1.1.1.1</td>
        <td>cela</td>
        <td>2</td>
      </tr>
      <tr>
        <td>1.1.1.1</td>
        <td>anna</td>
        <td>3</td>
      </tr>
      </tbody>
    </table>
    <a href="#" class="btn-sandbox" data-scowl-query="Count(user by ip where ip.Contains('1'))">
      Try in Sandbox
    </a>
  </div>
</div>
